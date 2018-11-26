/* global $ */
/* global moment */

$(document).ready(function() {
    
    $("#contactSubmissions > tbody tr > td:nth-last-child(2)").each(function(index, ele) {
        var date = moment.utc($(this).text(), 'DD/MM/gggg HH:mm:ss');
        $(this).text(date.local().format('Do MMM YY, h:mm:ss a'));
    });
    
    $(".contact-delete").on('click', function(e) {
       e.preventDefault();
    
       var id = $(this).attr('data-id')
       
       $.ajax({
           url: '/admin/delete-contact',
           type: 'POST',
           data: 'id=' + id,
           success: function(obj) {
               $("#cs-row-" + id).remove();
           }
       });
    });
});
