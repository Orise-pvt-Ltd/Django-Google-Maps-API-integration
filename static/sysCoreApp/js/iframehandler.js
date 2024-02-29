function handleIframeLoad(iframeElement) {

    const contentDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;

    // Get the original form
    var originalForm = contentDoc.querySelector('.editmode-switch-form');

    // Get the 'region-main-box' element
    var regionMainBox = contentDoc.getElementById('region-main-box');

    // Check if both elements exist
    if (originalForm && regionMainBox) {
        // Clone the form element
        var formClone = originalForm.cloneNode(true);

        // Create a new div container for the cloned form
        var formContainer = document.createElement('div');

        // Set styles on the container
        formContainer.style.display = 'flex';
        formContainer.style.justifyContent = 'flex-end';
        formContainer.style.padding = '10px 0';

        // Append the cloned form to the new div container
        formContainer.appendChild(formClone);

        // Hide the original form
        originalForm.style.display = 'none';

        // Prepend the new div container with the cloned form to the regionMainBox
        regionMainBox.insertBefore(formContainer, regionMainBox.firstChild);

        // Add event listeners to the cloned form elements to redirect events to the original form
        var clonedCheckbox = formClone.querySelector('input[type="checkbox"]');
        clonedCheckbox.addEventListener('change', function () {
            var originalCheckbox = originalForm.querySelector('input[type="checkbox"]');
            originalCheckbox.checked = this.checked;
            originalCheckbox.dispatchEvent(new Event('change'));
        });

    }


    const hideAndRemoveElements = (elements) => {
        Array.from(elements).forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.remove();
            }
        });
    };

    hideAndRemoveElements([
        contentDoc.querySelector('.navbar'),
        contentDoc.getElementById("page-footer"),
    ]);

    hideAndRemoveElements(contentDoc.querySelectorAll(
    //    '.drawer, .breadcrumb, .drawer-toggles, .secondary-navigation, .urlselect'
    ));

    // '.drawer, .breadcrumb, .drawer-toggles, .secondary-navigation, .urlselect'

    const topMargin = contentDoc.getElementById("page");
    if (topMargin) {
        topMargin.style.marginTop = 0;
        topMargin.style.overflow = "visible";
    }

    iframeElement.style.display = 'block';
}

function showIframe(url, iframeId) {
    console.log('showIframe called with URL:', url);

    const embed = document.getElementById(iframeId);
    if (!embed) {
        console.error(`Iframe with ID '${iframeId}' not found.`);
        return;
    }

    embed.style.display = 'none';
    embed.addEventListener('load', function () {
        handleIframeLoad(embed);
    });

    if (url !== "") {
        embed.setAttribute("src", url);
    } else {
        handleIframeLoad(embed);
    }
}


