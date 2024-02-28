import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CuadroDeSeleccion() {
    return (
        <div>
        <div className='image-button'>
            <Link style={{ backgroundColor: '#FFFFFF' }} href='/registroEmpresas' className='.image-button.left'>
                {' '}
                <Image
                    src={'/Empresa.jpg'}
                    alt='Empresa'
                    height='30'
                    width='30'
                />
                Soy empleador
            </Link>
            <Link style={{ backgroundColor: '#FFFFFF' }} href='/registro' className='.image-button.rigth'>
                {' '}
                <Image
                    src={'/freelancer.png'}
                    alt='Freelancer'
                    height='30'
                    width='30'
                />
                Soy freelancer
            </Link>
        </div>
    </div>

    
    );
};

export default CuadroDeSeleccion