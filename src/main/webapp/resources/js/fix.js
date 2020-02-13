/**
 * Fix for form.jsp.
 *
 * Fix to let checkboxes to be checked
 * and change color to yellow using style.css.
 *
 * This fix removes additional element
 * (from all checkbox categories in form in STEP 1):
 *     <input type="hidden" name="_categories" value="on">
 * which is created by "form:checkbox".
 */

$(document).ready(function () {
    $('#categories1').next().remove();
    $('#categories2').next().remove();
    $('#categories3').next().remove();
    $('#categories4').next().remove();
    $('#categories5').next().remove();
});