```python
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestSpecDrivenPOC(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("file:///path/to/index.html")

    def tearDown(self):
        self.driver.quit()

    def test_update_title(self):
        # AC-1: The title of the webpage should be updated to "Spec Driven POC".
        title = self.driver.title
        self.assertEqual(title, "Spec Driven POC", "The title of the webpage should be 'Spec Driven POC'")

    def test_title_displayed(self):
        # AC-2: The title should be displayed in the <title> tag of the HTML document.
        title_tag = self.driver.find_element(By.TAG_NAME, "title")
        self.assertEqual(title_tag.text, "Spec Driven POC", "The title should be displayed in the <title> tag")

    def test_title_visible(self):
        # AC-3: The title should be visible on the webpage.
        title = self.driver.find_element(By.TAG_NAME, "title")
        self.assertTrue(title.is_displayed(), "The title should be visible on the webpage")

    def test_title_updated(self):
        # AC-4: The title should be updated when the page is loaded.
        # This test is typically done by checking the title after the page has loaded.
        # However, since we are using Selenium, we can't directly check the title after the page has loaded.
        # Instead, we can use a WebDriverWait to wait for the title to change.
        WebDriverWait(self.driver, 10).until(EC.title_contains("Spec Driven POC"))
        new_title = self.driver.title
        self.assertEqual(new_title, "Spec Driven POC", "The title should be updated to 'Spec Driven POC'")

if __name__ == "__main__":
    unittest.main()
```

In this solution, we create a unit test class `TestSpecDrivenPOC` that inherits from `unittest.TestCase`. We define methods for each acceptance criteria, such as `test_update_title`, `test_title_displayed`, `test_title_visible`, and `test_title_updated`. Each method uses Selenium to interact with the webpage and assert the expected behavior. The `setUp` method initializes the webdriver and navigates to the `index.html` file, and