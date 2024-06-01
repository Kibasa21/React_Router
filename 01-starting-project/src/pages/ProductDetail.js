import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {

    const params = useParams();// Ele pega todos os paths dinâmicos e adiciona no objeto de retorno como uma mera propriedade, logo:

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>{/* Existe relative path e relative route, o path faz .. voltar relativo ao url e o route relativo à hierarquia */}
            <p><Link to=".." relative="path">Back to Products</Link></p> {/* Esse .. faz voltar um nível superior na hierarquia de URL no padrão */}
        </>
    );
}