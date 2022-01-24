---
sidebar_position: 5
---

# Test and live modes

Each Fugu project has a test and live mode view. Events that you track using your live API key will be appear in live mode, and Events tracked with your test API key show up in the test mode. You can find your API keys in your [Project settings](/projects/project-settings).

You can toggle between the modes by clicking the "Toggle TEST mode" or "Toggle LIVE mode" button on the bottom right when you're in Events or Funnels view.

## Purpose

The purpose of two different modes is that it allows you to track test or staging Events without messing up your live data. A good practice might be to use your test API key if you're developing on your local machine or for your staging server, and use the live API key for your production environment.

Another neat quirk (if you're using the cloud version of Fugu) is that you can track Events in test mode without paying for Fugu. So, it's a great way to test Fugu and see if it's a good fit for you.


## Auto deletion
Test Events automatically delete after 14 days. Funnels created in test mode are not automatically deleted. That would be annoying.