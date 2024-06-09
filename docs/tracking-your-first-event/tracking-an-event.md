---
sidebar_position: 3
---

# Tracking an Event

Events are the fundament of Fugu. An event has a `name` (required) and `properties` (optional). The `name` is a simple string. The `properties` attribute has the format `JSON` (or stringified JSON) and is expected to contain key-value-pairs.
Use the `name` to describe your event, and the `properties` to save further data along with your event. In Fugu, you can analzye your data based on event names and properties.

To send an event to the Fugu API, call the events endpoint `https://fugu.yourdomain.com/api/v1/events`  (replacing `fugu.yourdomain.com` with wherever you're hosting Fugu) with a POST request that contains a body formatted as `application/json`. Here's an example:


```shell
curl "https://fugu.yourdomain.com/api/v1/events" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d '{
      "api_key": "very_secret",
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
Event names need be formatted as `String`, can be maximally 25 characters long and only contain numbers, letters and spaces. Before being saved, event names are capitalized. For example, if you set your event name to "Signed up", it will be saved as "Signed Up". The event names "all" and "All" are reserved by Fugu and you can't use them.


## Event Properties
Event properties are additional data that you might want to save along with your events. When analyzing your data, you can use event properties to break down your data deeper.

### Constraints
Event properties need to be formatted as `JSON` (or stringified JSON). The values are converted to `String` before being saved and currently only one level of nesting is allowed. For example, if you send an event property like this:

```json
// don't do this
{
  "device_info": {
    "os": "iOS 13",
    "model": "iPhone 11"
  }
}
```
It will be saved like this:

```json
{
  "device_info": "{\"os\": \"iOS 13\", \"model\": \"iPhone 11\"}"
}
```

Therefore, flatten your properties before sending them over. Like this:

```json
// do this instead
{
  "device_os": "iOS 13",
  "device_model": "iPhone 11"
}
```

Per our terms of service, you are not allowed to track personally identifiable information and we enforce that by checking of property names or values may contain such information. For example, this can be IP addresses or email addresses.

### Disallowed property names
The following property names are disallowed or reserved:
- "all"
- "All"
- "ip_address" (and variations)
- "email" (and variations)
- "phone" (and variations)

We might update this list in the future.