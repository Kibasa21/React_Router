import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'p1', title: 'product-1' },
    { id: 'p2', title: 'product-2' },
    { id: 'p3', title: 'product-3' },
]

export default function ProductsPage() {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map(({id, title}) => <li key={id}><Link to={"products/"+id}>{title}</Link></li>)}
            </ul>
        </>
    );
}