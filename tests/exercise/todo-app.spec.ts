/* eslint-disable notice/notice */
import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

// test.beforeEach(async ({ page }) => {
//   // Step 1: Navigate to the TodoMVC app.
//   await page.goto("https://demo.playwright.dev/todomvc");
// });

const TODO_ITEMS = [
  "buy some cheese",
  "feed the cat",
  "book a doctors appointment",
];

test.describe("New Todo", () => {
  // Example implementation
  test("should allow me to add todo items", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    // Step 1: Create a new todo locator.
    const newTodo = page.getByPlaceholder("What needs to be done?");

    // Step 2: Create and add the first todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press("Enter");

    // Step 3: Verify that the list has only one todo item.
    await expect(page.getByTestId("todo-title")).toHaveText([TODO_ITEMS[0]]);

    // Step 4: Create and add the second todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press("Enter");

    // Step 5: Verify that the list now has two todo items.
    await expect(page.getByTestId("todo-title")).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1],
    ]);
  });

  test("should clear text input field when an item is added", async ({
    page,
  }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    // Step 1: Create a new todo locator.
    // Hint: It's good to use user facing locators and at first glance we can see that the input has a text "What needs to be done?" (page.getByPlaceholder("What needs to be done?"));
    // Step 2: Create and add one todo item. - you can achieve this by using two playwright actions - fill (to add text in the input field and press action to add the item)
    // Reference: https://playwright.dev/docs/input
    // Step 3: Check that the input is empty.
    // Reference: Use assertion - https://playwright.dev/docs/test-assertions
  });

  test("should append new items to the bottom of the list", async ({
    page,
  }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    // Step 1: Create and add three default todos. Here you can use the `createDefaultTodos` helper function if you decide so.
    // Step 2: Check the test using different methods. Use at least two assertions (such as toBeVisible, toHaveText...)
    // Reference: Use assertion - https://playwright.dev/docs/test-assertions
  });

  test("should show #main and #footer when items added", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    // Step 1: Create a new todo locator.
    // Step 2: Add a todo item.
    // Step 3: Check that #main and #footer are visible.
  });
});

test.describe("Mark all as completed", () => {
  test.beforeEach(async ({ page }) => {
    // Step 1: Create and add three default todos.
    await createDefaultTodos(page);
  });

  test("should allow me to mark all items as completed", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    // Step 1: Complete all todos. Find the locator which will mark all items as completed and apply action on it.
    // Step 2: Ensure all todos have 'completed' class.
  });

  test("should allow me to clear the complete state of all items", async ({
    page,
  }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    // Step 1: Create a locator for the 'Mark all as complete' checkbox.
    // Step 2: Using Playwright actions check and then immediately uncheck the 'Mark all as complete' checkbox.
    // Step 3: Verify that there are no completed classes.
  });

  test("complete all checkbox should update state when items are completed / cleared", async ({
    page,
  }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    // Step 1: Create a locator for the 'Mark all as complete' checkbox.
    // Step 2: Check the 'Mark all as complete' checkbox and verify that it is checked.
    // Step 3: Uncheck the first todo.
    // Step 4: Verify that the 'Mark all as complete' checkbox is not checked.
    // Step 5: Check the 'Mark all as complete' checkbox again and verify that it is checked.
  });
});

test.describe("Item", () => {
  test("should allow me to mark items as complete", async ({ page }) => {
    // Step 1: Create a new todo locator.
    // Step 2: Create and add two items.
    // Step 3: Make a locator for the first item. Make it checked and verify that it is checked
    // Step 4: Use locator to select the second item, verify using assertion that it is not checked and than make it check by using an action.
    // Step 5: Make assertions that the two todos have "completed" class.
  });

  test("should allow me to un-mark items as complete", async ({ page }) => {
    // Step 1: Create a new todo locator.
    // Step 2: Create and add two items.
    // Step 3: Create locators for the first and second items
    // Step 4: Make the first todo item checked
    // Step 5: Assert that the first todo item is completed. Hint: You can use toHaveClass("completed") assertion
    // Step 6: Assert that the second to do is not checked
    // Step 7: Un-mark the first todo.
    // Step 8: Verify that the first and the second todo items are not completed.
  });

  test("should allow me to edit an item", async ({ page }) => {
    // Step 1: Create and add default todos. If you decide you can use the helper function createDefaultTodos
    // Step 2: Create a locator for the todo items.
    // Step 3: Edit the second todo item. For the purpose: Find the second item, use action to put it in editing mode by double clicking the item, than select the text box inside it and add edit text and press enter so the update is saved.
    // Step 4: Verify the new text value.
  });
});

test.describe("Editing", () => {
  // Create and add default todos. Now all the tests that follow inside the "describe" block will start with some todo items created.
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
  });

  test("should hide other controls when editing", async ({ page }) => {
    // Step 1: Double-click on the second todo item.
    // Step 2: Verify that other controls are not visible during editing. Verify that checkbox is hidden, verify that the label of the second todo item is hidden ("feed the cat")
  });

  test("should save edits on blur", async ({ page }) => {
    // Step 1: Double-click on the second todo item.
    // Step 2: Fill and blur the editing textbox.
    // Step 3: Verify the saved edits.
  });

  test("should trim entered text", async ({ page }) => {
    // Step 1: Double-click on the second todo item.
    // Step 2: Fill with "    buy some sausages    " text and press Enter to save the edits.
    // Step 3: Verify the trimmed text. Verify that the text is saved as "buy some sausages" without the spaces
  });

  test("should remove the item if an empty text string was entered", async ({
    page,
  }) => {
    // Step 1: Double-click on the second todo item.
    // Step 2: Fill with an empty string and press Enter to remove the item.
    // Step 3: Verify the item is removed.
  });

  test("should cancel edits on escape", async ({ page }) => {
    // Step 1: Double-click on the second todo item.
    // Step 2: Fill and press Escape to cancel edits.
    // Step 3: Verify that edits are canceled.
  });
});

test.describe("Counter", () => {
  test("should display the current number of todo items", async ({ page }) => {
    // Step 1: Create a new todo locator.
    // Step 2: Add the first todo and verify the counter have 1 item added.
    // Step 3: Add the second todo and verify the counter have 2 items added
  });
});

test.describe("Clear completed button", () => {
  // Start each test with a few items created
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
  });

  test("should display the correct text", async ({ page }) => {
    // Step 1: Check the first todo as completed.
    // Step 2: Verify that the 'Clear completed' button is visible.
  });

  test("should remove completed items when clicked", async ({ page }) => {
    // Step 1: Check the second todo as completed.;
    // Step 2: Click on the 'Clear completed' button.
    // Step 3: Verify that completed items are removed.
  });

  test("should be hidden when there are no items that are completed", async ({
    page,
  }) => {
    // Step 1: Check the first todo as completed.
    // Step 2: Click on the 'Clear completed' button.
    // Step 3: Verify that the 'Clear completed' button is hidden.
  });
});

test.describe("Routing", () => {
  // TODO
});

// Helper function to create default todos on the page
async function createDefaultTodos(page) {
  // create a new todo locator
  const newTodo = page.getByPlaceholder("What needs to be done?");

  for (const item of TODO_ITEMS) {
    await newTodo.fill(item);
    await newTodo.press("Enter");
  }
}
