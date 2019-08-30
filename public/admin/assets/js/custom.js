/* global $ */
/* global moment */
/* global swal */

$(document).ready(function() {

    $("#contactSubmissions > tbody tr > td:nth-last-child(2)").each(function(index, ele) {
        var date = moment.utc($(this).text(), 'DD/MM/gggg HH:mm:ss');
        $(this).text(date.local().format('Do MMM YY, h:mm:ss a'));
    });

    $(".contact-delete").on('click', function(e) {
        e.preventDefault();

        var id = $(this).attr('data-id');

        $.ajax({
            url: '/admin/api/messages/delete',
            type: 'POST',
            data: 'id=' + id,
            success: function(obj) {
                $("#cs-row-" + id).remove();
            }
        });
    });


    $(".project-delete").on('click', function(e) {
        e.preventDefault();

        var id = $(this).attr('data-id');

        const swalWithBootstrapButtons = swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
        });

        swalWithBootstrapButtons({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {

                $.ajax({
                    url: '/admin/api/project/delete',
                    type: 'POST',
                    data: 'id=' + id,
                    success: function(obj) {
                        $("#project-" + id).remove();

                        swalWithBootstrapButtons(
                            'Deleted!',
                            'The Project has been deleted.',
                            'success'
                        )
                    }
                });

            }
            else if (
                // Read more about handling dismissals
                result.dismiss === swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons(
                    'Cancelled',
                    'Your project is safe :)',
                    'error'
                )
            }
        })

    });
    
    $("#quick-add").on('click', function(e) {
        window.location = window.location.origin + "/admin/new-project";
    });
});
