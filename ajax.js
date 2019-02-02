const ajaxWithCallback = (success,fail)=>{
    setTimeout(
        ()=> success('call finished'),
        2000
    ),
    setTimeout(
        ()=> fail('cal failed'),
        4000
    );
}

ajaxWithCallback(
    (data) => console.log('success',data),
    (err) => console.log('error',err)
);
// example code for ajax