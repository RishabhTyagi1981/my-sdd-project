import json
import urllib.request
import base64

def skill_fetch_jira_story(domain: str, email: str, token: str, issue_key: str) -> dict:
    """
    SKILL: Connects securely to the Atlassian JIRA REST API v3 
    and fetches user stories, descriptions, and context by issue key.
    """
    # Clean up the domain name to ensure it forms a valid endpoint
    clean_domain = domain.replace("https://", "").replace("http://", "").strip("/")
    url = f"https://{clean_domain}/rest/api/3/issue/{issue_key.strip()}"
    
    # JIRA uses Base64 encoded 'email:api_token' credentials for Basic Auth
    auth_str = f"{email}:{token}"
    b64_auth = base64.b64encode(auth_str.encode()).decode()
    
    headers = {
        "Authorization": f"Basic {b64_auth}",
        "Accept": "application/json"
    }
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode())
            
            # Extract fields from the complex JIRA v3 JSON response object
            fields = data.get("fields", {})
            summary = fields.get("summary", "No Summary Provided")
            
            # JIRA v3 uses Atlassian Document Format (ADF) for descriptions. 
            # We add a parsing fallback to cleanly pull text descriptions.
            description_raw = fields.get("description", {})
            description_text = ""
            
            if isinstance(description_raw, dict):
                # Simple recursive extraction for ADF text nodes
                for block in description_raw.get("content", []):
                    for content_node in block.get("content", []):
                        if content_node.get("type") == "text":
                            description_text += content_node.get("text", "") + "\n"
            else:
                description_text = str(description_raw)

            formatted_story = f"# {issue_key}: {summary}\n\n## Description\n{description_text if description_text.strip() else 'No description text compiled.'}"
            return {"success": True, "story_text": formatted_story}
            
    except Exception as e:
        return {"success": False, "story_text": f"❌ JIRA Core Fetch Failure: {str(e)}"}
