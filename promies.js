const ajaxwithCallback=(success,fail)=>{
    return new Promise(
    (resolve,reject)=>{
        setTimeout(
            ()=>success('call finished')
            ,5000
        );
    
    setTimeout(
        ()=>fail('call failed')
        ,
        4000
    );
    }
    );

    ajaxwithCallback().then(
        (data)=>console.log('success',data)
    ).catch(
        (err)=>console.log('error',err)
    );

    }
    