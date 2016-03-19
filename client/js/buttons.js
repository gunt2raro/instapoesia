$(document).ready(function(){
    
    console.log("Works")
    
    $("#login").click( function(e){
        e.preventDefault()
        $('#write_form').hide("slow")
        $('#register_form').hide("slow")
        $('#login_form').show("slow")
    } )
    
    $("#write").click( function(e){
        e.preventDefault()
        $('#register_form').hide("slow")
        $('#login_form').hide("slow")
        $('#write_form').show("slow")
    } )
    
    $("#register").click( function(e){
        e.preventDefault()
        $('#write_form').hide("slow")
        $('#login_form').hide("slow")
        $('#register_form').show("slow")
    } )
    
    $('#close_window_write').click( function(e) {
        e.preventDefault()
        $('#write_form').hide("slow")
    })
    
    $('#close_window_register').click( function(e) {
        e.preventDefault()
        $('#register_form').hide("slow")
    })
    
    $('#close_window_login').click( function(e) {
        e.preventDefault()
        $('#login_form').hide("slow")
    })
    
})