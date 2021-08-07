---
layout: post
title:  "HTML CSS Accessibility"
author: Bhushan Goel
categories: [ HTML ]
tags: [ Accessibility ]
companies: [Publicis Sapient, Go-jek]
description: "Accessibility refers to web content, and a UI (user interface) that can be understood, navigated, and interacted with by a broad audience."
featured: false
image: assets/images/html.png
comments: false
---

Accessibility refers to web content, and a UI \(user interface\) that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities.

## HTML and accessibility

Semantic HTML -- using the correct HTML elements for their intended purpose as much as possible.

### Using clear language

The language you use can also affect accessibility. In general, you should use clear language that is not overly complex and doesn't use unnecessary jargon or slang terms. This not only benefits people with cognitive or other disabilities; it benefits readers for whom the text is not written in their first language!

Apart from this, you should try to avoid using language and characters that don't get read out clearly by the screen reader.

For example:

* Don't use dashes if you can avoid it. Instead of writing 5–7, write 5 to 7.
* Expand abbreviations — instead of writing Jan, write January.
* Expand acronyms, at least once or twice. Instead of writing HTML in the first instance, write Hypertext Markup Language.

### alt attribute: in image

`alt` text describes the content of the image and provides a text alternative for it. This helps in cases where the image fails to load or can't be seen by a user. It's also used by search engines to understand what an image contains to include it in search results.

People with visual impairments rely on screen readers to convert web content to an audio interface. They won't get information if it's only presented visually. For images, screen readers can access the alt attribute and read its contents to deliver key information.

### HEADINGS:

Use Headings to Show Hierarchical Relationships, and each page should have only 1 `<h1>` tag. Heading tags have semantic meaning and should not be used just for the sizing purpose.

Headings with equal \(or higher\) rank start new implied sections, headings with lower rank start subsections of the previous one.

### `main, header, footer, nav, article, and section`

By default, a browser renders these elements similar to the div. However, using them where appropriate gives additional meaning to your markup. Assistive technologies can access this information to provide better page summary or navigation options to their users.

### `<figure>`

`<figure>` element, along with the related `<figcaption>`.

Used together, these items wrap a visual representation \(like an image, diagram, or chart\) along with its caption. For data visualizations like charts, the caption can be used to briefly note the trends or conclusions for users with visual impairments.

### `<label>`

The `label` tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. `for` attribute on a label tag explicitly associates that label with the form control and is used by screen readers.

_**Example:**_

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
</form>
```

### `<fieldset>-to group radio buttons`

Surrounds the entire grouping of radio buttons to achieve this. It often uses a `<legend>` tag to provide a description for the grouping, which is read by screen readers for each choice in the `<fieldset>` element.

_**Example:**_

```html
<form>
    <fieldset>
        <legend>Choose one of these three items:</legend>
        <input id="one" type="radio" name="items" value="one">
        <label for="one">Choice One</label><br>
        <input id="two" type="radio" name="items" value="two">
        <label for="two">Choice Two</label><br>
        <input id="three" type="radio" name="items" value="three">
        <label for="three">Choice Three</label>
    </fieldset>
</form>
```

### `<time datetime>`

HTML5 also introduced the `time` element along with a `datetime` **attribute** to standardize times. This is an inline element that can wrap a date or time on a page.

This is the value accessed by assistive devices.

_**Example:**_

Master Camper Cat officiated the cage match between Goro and Scorpion last Wednesday, which ended in a draw.

```html
<p>
    Master Camper Cat officiated the cage match between Goro and Scorpion
    <time datetime="2013-02-13">last Wednesday</time>
    , which ended in a draw.
</p>
```

### Link text

Screen readers read the link text, or what's between the anchor \(`a`\) tags. Having a list of "click here" or "read more" links isn't helpful. Instead, you should use brief but descriptive text within the `a` tags to provide more meaning for these users.

_**Example:**_

Click here for [information about batteries](2021-04-05-html-css-accessibility.md)

```html
<p>
    Click here for <a href="">information about batteries</a>
</p>
```

### `accesskey`

HTML offers the `accesskey` attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users.

HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.

_**Example:**_

Important Button

```html
<button accesskey="b">Important Button</button>
```

### `tabindex` attribute

Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as `div, span, and p`, by placing a `tabindex="0"` attribute on them.

```html
<div tabindex="0">I need keyboard focus!</div>
```

The `tabindex` attribute also specifies the exact tab order of elements. This is achieved when the value of the attribute is set to a positive number of 1 or higher.

Setting a `tabindex="1"` will bring keyboard focus to that element first. Then it cycles through the sequence of specified `tabindex` values \(2, 3, etc.\), before moving to default and `tabindex="0"` items.

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>

<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

## CSS

### Elements visible to a Screen Reader by Using Custom CSS

CSS can also improve accessibility on your page when you want to visually hide content meant only for screen readers. This happens when information is in a visual format \(like a chart\), but screen reader users need an alternative presentation \(like a table\) to access the data.

```css
.sr-only {
    position: absolute;
    *left: -10000px;
    *width: 1px;
    *height: 1px;
    top: auto;
    *overflow: hidden;
}
```

These 4 properties help us in writing CSS for screen readers.

**Note**: The following CSS approaches _will NOT_ do the same thing:

* `display: none; or visibility: hidden;` hides content for everyone, including screen reader users
* Zero values for pixel sizes, such as `width: 0px; height: 0px;` removes that element from the flow of your document, meaning screen readers will ignore it

### Using High contrast Text \(Colorblind users\)

_**The contrast ratio should be 4.5:1**_ So that color blind users can distinguish some colors from others.

The Web Content Accessibility Guidelines \(WCAG\) recommend at least a **4.5 to 1 contrast ratio for normal text**. The ratio is calculated by comparing the relative luminance values of two colors.

This ranges from **1:1 for the same color**, or no contrast, to **21:1 for white against black**, the strongest contrast. There are many contrast checking tools available online that calculate this ratio for you.

The 4.5:1 contrast ratio can be reached by shading \(adding black to\) the darker color and tinting \(adding white to\) the lighter color. Darker shades on the color wheel are considered to be shades of blues, violets, magentas, and reds, whereas lighter tinted colors are oranges, yellows, greens, and blue-greens.

**NOTE: Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.**

