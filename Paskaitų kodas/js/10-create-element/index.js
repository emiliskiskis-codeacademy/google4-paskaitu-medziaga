/*
  getElementById
  getElementsByClassName
  querySelector
  querySelectorAll

  innerHTML, outerHTML
  innerText, textContent
  style
  .src, .alt, .rowspan, .colspan, .className

  createElement
  append, prepend, after, before
  parentElement, children, nextElementSibling, previousElementSibling
  remove

  appendChild
  parentNode, childNodes, nextSibling, previousSibling
*/

const headingText = "Section 3"
const paragraphText =
  "Ex Lorem nisi sint adipisicing nostrud adipisicing enim do magna proident Lorem dolor ut ex. Proident elit proident veniam fugiat nisi laboris. Officia sunt ullamco deserunt aute mollit. Ex laboris nulla aliquip magna ea mollit. Cupidatat cillum eu aliqua culpa."

const sectionEl = document.createElement("section")
const h2El = document.createElement("h2")
const pEl = document.createElement("p")

/*

<section>
  <h2>
  <p>
</section>

*/

h2El.innerText = headingText
pEl.innerText = paragraphText

sectionEl.append(h2El)
sectionEl.append(pEl)

console.log(document.body.children)

// document.body.append(sectionEl)
// document.body.children[2].after(sectionEl)

const childrenArr = Array.from(document.body.children)
childrenArr.filter(child => child.tagName === "SECTION")[0].after(sectionEl)
