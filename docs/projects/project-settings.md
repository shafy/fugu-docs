---
sidebar_position: 4
---

# Project settings

Each project has separate settings. To view a project's settings, go to your project view and then click on "Project settings" on the top right.

![Project Settings](/img/project_settings_screenshot_1.png)

## Name
You can change the name of your project by clicking on "Edit projects" and entering a new name.

## Public projects
Your projects are per default not publicly visible (i.e. you need to sign in with your user account to view the data). If you wish, you can change your project's visibility to public and share your URL with anyone you like. Simply go to "Edit project" and check the "Make public" checkbox.

## API keys
In your project settings, you can retrieve the test and live API keys for your project. You need to send along your API key every time you [send a request](/getting-started/tracking-an-event) to the Fugu API.

Keep in mind that anybody who has your API key can send events to your project. Treat your API keys as any other secret in your app (e.g., don't check them into version control, don't expose them) and track your events server-side, so that your API key is not displayed to the browser.

## Delete project
You can also delete your project. When you delete your project, all events belonging to this project are also deleted. Deletions are final and cannot be recovered by you or us.