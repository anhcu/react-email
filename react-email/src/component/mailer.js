import React from 'react'
import emailjs from 'emailjs-com'
import Mailer from '../component/Mailer.css'




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

        <card className="bg-light text-center text-lg-start">
            <div className="contain p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Thank you</h5>
                        <p>
                        Thank you for taking the time out of your busy schedule to view my portfolio. I would love to join your wonderful team. With my skills and qualifications, I’m a great candidate for this position. I am committed to learning any new skills on my own to succeed in this role.
                        </p>
                    </div>

                    <form className="col-lg-6 col-md-12 mb-4 mb-md-0" 
                         //create a function for onSubmit to send email// 
                        onSubmit={sendEmail}>
                        <h5 className="text-uppercase">Contact me</h5>
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
            </div>

            {/* <div callName="container border"
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
            </div> */}
        </card>
    )
}

//1.Install npm i emailjs-com in your terminal
//2.Go to emailjs.com and sign up
//3.Email services and add new severices 
//4.Email templates and set up user name and message
//5. Copy init user key
