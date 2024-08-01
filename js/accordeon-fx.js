function toggleAccordion(item) {
    const content = item.querySelector('.osteopathie_text-box_accordeon-contenu');
    const icon = item.querySelector('.osteopathie_text-box_list-icon');

    // Toggle content visibility
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate');
        
    } else {
        // Collapse other open items
        document.querySelectorAll('.osteopathie_text-box_accordeon-item .osteopathie_text-box_accordeon-contenu')
            .forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.osteopathie_text-box_list-icon.rotate')
            .forEach(el => el.classList.remove('rotate'));

        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate');
    }
}
