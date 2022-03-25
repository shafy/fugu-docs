---
sidebar_position: 6
---

# Embedding a project

You can embed your project into any website you want. For example, you can decide to share your product analytics data publicly with your users and embed your project.

To get your embed code, go to your [project settings](/projects/project-settings) and make sure your project's visibility is set to public. You should then see an embed code similar to this (but with your project's URL):

```html
<iframe
  src="https://app.fugu.lol/cvss/projects/fun-project/events?embed=true"
  title="Fugu" loading="lazy" referrerpolicy="no-referrer"
  height="600px" width="800px">
</iframe> 
```

This is just simply HTML and will run on any website where you can insert HTML. To embed your project, just copy and paste your embed code.

## Customize your embed code

You can customize your embed code freely. Since it's an `iframe` element, you can have a look at the [MDN docs for iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) to see what you can do. Here are some examples.


### Show a specific event, aggregation, date range or property breakdown

You can replace the URL in `src` with a more specific URL. Just navigate to your projects, select the desired values from the dropdowns, and copy and paste the URL from your browser to the `src` attribute. Make sure to add the `&embed=true` parameter at the end of the URL. For example, like this:

`https://app.fugu.lol/cvss/projects/fun-project/events/new-signup?agg=w&date=30d&embed=true`

### Change width and height

To change the width and height of the embedded project, simply edit the `width` and `heigth` attributes of the `iframe`. You can either work with fixed pixel values, or with relative percentage values (e.g. `width=100%`).

If you're familiar with HTML and CSS, you probably know that you can also use more advanced CSS techniques to control how your project will be rendered. For example, you might want to display the project in different heights and widths depending on if the visitor is on a mobile or desktop device.
