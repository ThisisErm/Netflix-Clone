$(function() {
    const tabs = $('#features nav a');
    const tabsContent = $('#features article section');

    tabs.click(function(e) {
        e.preventDefault();

        const that = $(this);

        tabs.removeClass('is-selected');
        that.addClass('is-selected');
        tabsContent.removeClass('is-selected');

        tabsContent
            .filter((i, tab) => $(tab).data('id') === that.data('id'))
            .addClass('is-selected');
    })
})