const createdElements = (
    tagName,
    className,
    parentElement = document.body
) => {
    const element = document.createElement(tagName);
    element.className = className;
    parentElement.appendChild(element);

    return element;
};

export default createdElements;