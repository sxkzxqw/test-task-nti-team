import React from 'react';
import styles from './Form.module.css'
import phone from '../../images/news/iPhone-13-Pro-Max.png'
import adress from '../../images/news/location.svg'
import email from '../../images/news/sms.svg'
import call from '../../images/news/call-calling.svg'
import facebook from '../../images/news/facebook.svg'
import whatsapp from '../../images/news/whatsapp.svg'

const Form = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div>
                        <p className={styles.left_contacts}>Наши контакты</p>
                        <p className={styles.left_subcontacts}>Dы можете связаться с нашим онлайн-консультантом</p>
                    </div>
                    <div className={styles.left_containers}>
                        <div className={styles.left_container}>
                            <img src={adress} alt='location' className={styles.left_container_img} />
                            <div className={styles.left_content_container}>
                                <p className={styles.left_context_top_text}>Адрес</p>
                                <p className={styles.left_content_bottom_text}>Москва, ул. 3-я Хорошевская, дом<br /> 2, строение 1</p>
                            </div>
                        </div>
                        <div className={styles.left_container}>
                            <img src={email} alt='email' className={styles.left_container_img} />
                            <div className={styles.left_content_container}>
                                <p className={styles.left_context_top_text}>E-mail</p>
                                <p className={styles.left_content_bottom_text}>dell_ru@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.left_container}>
                            <img src={call} alt='phone' className={styles.left_container_img} />
                            <div className={styles.left_content_container}>
                                <p className={styles.left_context_top_text}>Телефон</p>
                                <p className={styles.left_content_bottom_text}>+7 495 737-06-01<br />
                                    +7 495 737-06-01</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.whats}>
                        <img src={facebook} alt='facebook' className={styles.facebook} />
                        <img src={whatsapp} alt='facebook' className={styles.facebook} />
                    </div>
                    <img className={styles.iphone} alt='iphone' src={phone} />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_title}>
                        <p className={styles.right_title_text}>Оставьте заявку</p>
                        <p className={styles.right_subtitle_text}>Оставьте свой номер, и мы перезвоним Вам.</p>
                    </div>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            <p className={styles.label_text}>Ваше имя</p>
                            <input type='text' className={styles.input}></input>
                        </label>
                        <label className={styles.label}>
                            <p className={`${styles.label_text} ${styles.label_text_sec}`}>Номер телефона</p>
                            <input type='phone' className={styles.input}></input>
                        </label>
                        <label className={`${styles.label} ${styles.label_third}`}>
                            <p className={`${styles.label_text} ${styles.label_text_third}`}>Комментарий</p>
                            <textarea className={`${styles.input} ${styles.input_third}`}></textarea>
                        </label>
                        <div className={styles.btn_wrapper}>
                            <button type='submit' className={styles.btn}>&gt;</button>
                            <p className={styles.podrobnee}>Заказать</p>
                        </div>
                    </form>
                </div>
            </div>
            <p className={styles.section_title}>our <br /> contacts</p>
        </section>
    );
};

export default Form;