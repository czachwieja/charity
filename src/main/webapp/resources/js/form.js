$(document).ready(function () {
    $('#quantity-summary').text('1');
    $('#bags-summary').text('worek');
    let inside = ', a w nim: ';
    $('#quantity').change(function () {
        let quantity = $(this).val();
        $('#quantity-summary').text(quantity);
        let bags;
        if (quantity === '1') {
            bags = 'worek';
            inside = ', a w nim: ';
        } else {
            inside = ', a w nich: ';
            if (quantity < 5) {
                bags = 'worki';
            } else {
                bags = 'worków';
            }
        }
        $('#bags-summary').text(bags);
    });
    $("button").click(function () {
        let selectedCategories = [];
        $.each($("input[name='categories']:checked"), function () {
            selectedCategories.push($(this).siblings('span.description').text());
        });
        $('#categories-summary').text(inside + selectedCategories.join(", "));
        $('#institution-summary').text($("input[name='institution']:checked").siblings('span.description').find('span.institution-name').text());
        $('#street-summary').text($('#street').val());
        $('#city-summary').text($('#city').val());
        $('#zipCode-summary').text($('#zipCode').val());
        $('#phoneNumber-summary').text($('#phoneNumber').val());
        $('#pickUpDate-summary').text($('#pickUpDate').val());
        $('#pickUpTime-summary').text($('#pickUpTime').val());
        $('#pickUpComment-summary').text($('#pickUpComment').val());
    });
});