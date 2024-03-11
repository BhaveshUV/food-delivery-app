const Contact = () => {
    return (
        <div className="text-white flex flex-col w-96 gap-4 mx-auto bg-blue-900 box-content p-6 rounded-lg shadow-lg">
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <form className="flex flex-col w-96 gap-2" aria-label="form">
                <input type="text" placeholder="Your name" className="px-2 py-1 rounded-md text-black" />
                <textarea type="text" placeholder="Message" className="px-2 py-1 rounded-md text-black w-full h-20" />
                <button className="px-2 py-1 rounded-md bg-green-800 w-fit">Submit</button>
            </form>
            <p>Email: bhaveshruv@gmail.com</p>
        </div>
    )
}

export default Contact;