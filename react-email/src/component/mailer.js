import React from 'react'
import emailjs from 'emailjs-com'


//create a function for emailjs and set it to default//
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        //email service//
        'service_kktxhfl',
        //email templates 
        'template_3wq2dv3',
        e.target,
        //integration init user
        "user_L8W30kMzy7UcRf3opo8pD",
    ).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
}

export default function mailer() {
    return (
        <div callName="container border"
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingBottom: '1px',
                width: "50%",
                backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>

            <h1 style={{ marginTop: '5px', paddingTop:'15px', color: '#fff' }}>Contact Form</h1>
            <form className='row' style={{ margin: "25px 85px 75px 100px", fontFamily: 'bold', color: "#fff" }}
                //create a function for onSubmit to send email// 
                onSubmit={sendEmail}>
                <lable>Name</lable>
                <input type="text" name="name" className='form-control' />

                <lable>Email</lable>
                <input type="email" name="user_email" className='form-control' />

                <label>Message</label>
                <textarea name="message" rows="4" className='form-control' />
                <input type="submit" value="Send" className='form-control btn btn-primary'
                    style={{ marginTop: "30px" }}
                />
            </form>
        </div>
    )
}

//1.Install npm i emailjs-com in your terminal
//2.Go to emailjs.com and sign up
//3.Email services and add new severices 
//4.Email templates and set up user name and message
//5. Copy init user key
