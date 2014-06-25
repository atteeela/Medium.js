var article4 = document.getElementById('article4'),
    article4Button = document.getElementById('article4Button'),
    article4Medium = new Medium({
        element: article4,
        mode: Medium.richMode,
        placeholder: 'Your Article 4',
        attributes: {
            remove: []
        }
    });

article4Button.onmousedown = function(e) {
	e.preventDefault();
    article4Medium.select();
    article4Medium.invokeElement('p', {
	    title: "I'm an invoked element",
	    style: "background-color: #66D9EF; color: #272B2F"
    });
};