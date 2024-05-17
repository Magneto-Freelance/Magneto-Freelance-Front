"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function CuadroDeSeleccionInicio() {
    const params = useParams<{ type: string }>();
    const { type } = params;
    return (
        <div className='image-button' style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Link
                href={type === 'inicio' ? '/inicio/empresa' : '/registro-empresas'}
                className='left'
                style={{ backgroundColor: '#004080', display: 'inline-block', padding: '30px', border: '2px solid #000', borderRadius: '10px', marginRight: '50px', width: '45%' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        src={'/Empresa.jpg'}
                        alt='Empresa'
                        height='60'
                        width='60'
                    />
                    <span style={{ marginLeft: '20px', fontSize: '24px', color: '#fff' }}>Soy empleador</span>
                </div>
            </Link>
            <Link
                href={type === 'inicio' ? '/inicio/freelancer' : '/registro'}
                className='right'
                style={{ backgroundColor: '#7fffd4', display: 'inline-block', padding: '30px', border: '2px solid #000', borderRadius: '10px', width: '45%' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        src={'/freelancer.png'}
                        alt='Freelancer'
                        height='60'
                        width='60'
                    />
                    <span style={{ marginLeft: '20px', fontSize: '24px', color: '#000' }}>Soy freelancer</span>
                </div>
            </Link>
        </div>
    );
}

export default CuadroDeSeleccionInicio;
