import { use } from 'react';
import { Offer } from '../types';

interface MuroProps {
    search: string;
}

async function getOffers(search: string) {
    const url = new URL('http://localhost:8000/offer');
    if(search && search !== '') {
        url.searchParams.append('search', search);
    }
    const offers = await fetch(url.toString(), {
        method: 'GET',
    });
    const offersJson = (await offers.json()) as Offer[];
    return offersJson;
}

function Muro({ search }: MuroProps) {
	const offersJson = use(getOffers(search));

    return (
		<div className='container p-4'>
			<div className='row row-cols-1 g-4'>
				{offersJson.map((offer) => (
					<div key={offer._id} className='col'>
						<div className='card h-100'>
							<div className='card-body'>
								<h5 className='card-title'>{offer.title}</h5>
								<p className='card-text'>{offer.description}</p>
								<p className='card-text'>Salario: {offer.salary}</p>
								<p className='card-text'>Contratante: {offer.employer}</p>
								<button type='submit' className='btn btn-primary'>
									Aplicar
							</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Muro;