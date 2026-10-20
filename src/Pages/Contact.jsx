import './Contact.css';

const Contact = () => {
return ( <div className="contact-section"> <form
             action="https://formspree.io/f/xzedvwkz"
             method="POST"
         > <input
                 type="text"
                 name="name"
                 placeholder="Enter Name Here"
                 required
             />
            <input
                type="email"
                name="email"
                placeholder="Enter Email Here"
                required
            />

            <textarea
                name="message"
                placeholder="Enter Message"
                required
            />

            <button type="submit">Submit</button>
        </form>
    </div>
);

};

export default Contact;
