export default function Search() {
    return(
        <section>
            <div>
                <label htmlFor="search" className="sr-only">Search IP address</label>
                <input id="search" name="search" type="number" placeholder="Enter IP address" required />
                <button type="submit"></button>
            </div>
        </section>
    )
}