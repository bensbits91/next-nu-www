export default function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <section>
                    <h2>Get in touch</h2>
                    <form>
                        <div className="fields">
                            <div key='field-1' className="field half">
                                <input disabled type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div key='field-2' className="field half">
                                <input disabled type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div key='field-3' className="field">
                                <div className="textarea-wrapper">
                                    <textarea disabled name="message" id="message" placeholder="Message" rows="1"></textarea>
                                </div>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input disabled type="submit" value="Send" className="primary" /></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <h2>Follow</h2>
                    <ul className="icons">
                        <li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon brands style2 fa-500px"><span className="label">500px</span></a></li>
                        <li><a href="#" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
                        <li><a href="#" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                </section>
                <ul className="copyright">
                    <li>© 2021 Ben Brooks. All rights reserved.</li>
                </ul>
            </div>
        </footer>
    )
}