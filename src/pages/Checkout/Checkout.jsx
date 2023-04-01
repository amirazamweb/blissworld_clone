import style from './Checkout.module.css';
import checkoutImage from './../../checkout_img.PNG';

const Checkout = () => {
    return (
        <div className={style.main}>
            <div className={style.child1}>
                <div><img src={checkoutImage} alt="" /></div>
                <form action="">
                    <h3>Contact information</h3>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="" id="email" />
                    </div>
                    <h3>Shipping Address</h3>
                    <div>
                        <label htmlFor="country">Country/region</label><br />
                        <select name="" id="country">
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Finland">Finland</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Chile">Chile</option>
                            <option value="Crotia">Crotia</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czechia">Czechia</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guernesy">Guernesy</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Italy">Italy</option>
                            <option value="Jeresy">Jersey</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Liechtenstien">Liechtenstien</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Malta">Malta</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Vetican City">Vetican City</option>
                        </select>
                    </div>
                    <div className={style.first_multiple_contain_elm}>
                        <div>
                            <label htmlFor="fname">First Name</label><br />
                            <input type="text" name="" id="fname" />
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name</label><br />
                            <input type="text" name="" id="lname" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="shreveport">Shreveport</label><br />
                        <input type="text" name="" id="shreveport" />
                    </div>
                    <div>
                        <label htmlFor="">Apartments, suite etc. (optional)</label><br />
                        <input type="text" name="" id="" />
                    </div>
                    <div className={style.second_multiple_contain_elm}>
                        <div>
                            <label htmlFor="suburb">Suburb</label><br />
                            <input type="text" name="" id="suburb" />
                        </div>
                        <div>
                            <label htmlFor="territory">State/territory</label><br />
                            <select name="" id="territory">
                                <option value="Australian Capital Territory">Australian Capital Territory</option>
                                <option value="">New South Wales</option>
                                <option value="Northern Territory">Northern Territory</option>
                                <option value="New South Wales">New South Wales</option>
                                <option value="Queensland">Queensland</option>
                                <option value="South Australia">South Australia</option>
                                <option value="Tasmania">Tasmania</option>
                                <option value="Victoria">Victoria</option>
                                <option value="Western Australia">Western Australia</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postcode">Postcode</label><br />
                            <input type="text" name="" id="postcode" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label><br />
                        <input type="number" name="" id="phone" />
                    </div>
                    <div>
                        <button>Continue to shipping</button>
                    </div>
                </form>
            </div>
            <div className={style.child2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatum animi rerum nostrum, facilis dolore ducimus soluta temporibus itaque mollitia est? Perspiciatis magnam deserunt iste sint nihil animi ad expedita debitis officia odit vel facilis quod quas optio distinctio ratione, temporibus blanditiis! Quaerat, recusandae perspiciatis sunt autem alias illo. Culpa, ab? Dolor, amet iusto veritatis id, dicta nihil labore quaerat nulla autem eveniet odio tempore saepe fugiat! Quaerat suscipit sequi vitae sunt non. Architecto fuga atque tenetur velit enim eum suscipit corrupti vitae. Odit a non, aliquid officiis dolore inventore sit fugiat perferendis ab velit necessitatibus, nobis dolores impedit deserunt quibusdam repudiandae ad ea laborum ullam. Impedit, dolorum officiis. Praesentium, consectetur reprehenderit ipsam doloremque numquam at autem? Fugit, delectus autem?
            </div>
        </div>
    )
}

export default Checkout;