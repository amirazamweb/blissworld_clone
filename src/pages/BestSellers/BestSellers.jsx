import bestSellersData from './../../data/bestSellers.json';
import PageContainer from '../../components/PageContainer/PageContainer';

const BestSellers = () => {
    return <PageContainer data={bestSellersData} />
}

export default BestSellers;