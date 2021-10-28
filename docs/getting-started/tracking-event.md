---
sidebar_position: 3
---

# Tracking an Event

Events are the fundament of Fugu. An event has a `name` (required) and `properties` (optional). The `name` is a simple string. The `properties` attribute has the format `JSON` (or stringified JSON) and is expected to contain key-value-pairs.
Use the `name` to describe your event, and the `properties` to save further data along with your event. In Fugu, you can analzye your data based on event names and properties.

To send an event to the Fugu API, call the events endpoint `https://app.fugu.lol/api/v1/events` with a POST request that contains a body formatted as `application/json`. Here's an example:


```shell
curl "https://app.fugu.lol/api/v1/events" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d '{
      "api_key": "very_secret"
      "name": "Signed Up",
      "properties": {
        "platform": "web",
        "plan": "starter"
      }
    }'
```

As you can see, you also need to send along your `api_key` that you can find in your project settings.

## Event Name
The event name is a string and can be anything you want. Make sure to stick with an event name once chosen, because events are grouped together by their names.

### Constraints
Event names can be maximally 25 characters long and only contain numbers, letters and spaces. Before being saved, event names are capitalized. For example, if you set your event name to "Signed up", it will be saved as "Signed Up". The event names "all" and "All" are reserved by Fugu and you can't use them.


## Event Properties
Event properties are additional data that you might want to save along with your events. When analyzing your data, you can use event properties to break down your data deeper.