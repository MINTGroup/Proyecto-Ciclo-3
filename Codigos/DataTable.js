$(document).ready(function() {
    $.fn.dataTable.ext.classes.sPageButton = 'btn mx-1 btn-outline-dark rounded-3';
    $('#data-table-I').DataTable( {
        language: {
            search: '<i class="fas fa-search"></i> ',
            searchPlaceholder: 'Search'
        },
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'multi',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]],
    } );

    $.fn.dataTable.ext.classes.sPageButton = 'btn mx-1 btn-outline-dark rounded-3';
    $('#data-table-II').DataTable( {
        language: {
            search: '<i class="fas fa-search"></i> ',
            searchPlaceholder: 'Search'
        },
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'multi',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]],
    } );
} );
