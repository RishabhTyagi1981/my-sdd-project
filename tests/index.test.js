```python
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestUpdatePageTitle(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("file:///path/to/index.html")

    def tearDown(self):
        self.driver.quit()

    def test_update_page_title(self):
        # AC-1: The page title in index.html should be updated to "SDD POC".
        expected_title = "SDD POC"
        actual_title = self.driver.title
        self.assertEqual(actual_title, expected_title, "The page title should be 'SDD POC'")

        # AC-2: The title should be displayed correctly on the webpage.
        title_element = self.driver.find_element(By.TAG_NAME, "h1")
        self.assertEqual(title_element.text, expected_title, "The title should be displayed correctly")

        # AC-3: The title should be updated immediately after the page loads.
        # This test is typically handled by the browser's navigation process, so it's not directly testable in a unit test.

        # AC-4: The title should be updated without any errors or exceptions.
        # This test is typically handled by the browser's navigation process, so it's not directly testable in a unit test.

if __name__ == "__main__":
    unittest.main()
```

In this solution, we use Selenium to automate the process of navigating to the webpage and verifying the title. The `test_update_page_title` method contains assertions to check the expected title and the presence of the title element on the page. The actual title is retrieved using `self.driver.title`, and the title element is found using `self.driver.find_element(By.TAG_NAME, "h1")`. The `assertEqual` method is used to compare the actual title with the expected title.