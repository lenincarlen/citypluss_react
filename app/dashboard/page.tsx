'use client';
import Image from 'next/image'
import React from 'react';
import  Link from 'next/link';
import { useRouter } from 'next/navigation';
 


// Importa los iconos necesarios de alguna librería de iconos, por ejemplo:
import { UserIcon, UsersIcon, ChartBarIcon, MapIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const router = useRouter();

  // Datos de ejemplo - en una aplicación real, estos vendrían de tu API
  const stats = {
    totalTeams: 5,
    totalMembers: 150,
    activeProvinces: 8,
    registeredVoters: 7425685
  };

  const handleLogout = () => {
    // Aquí iría la lógica de cierre de sesión
    console.log('Logout');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen ">
      <nav className=" bg-white-50 ">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-600">CityPlus</span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2px-2 sm:px-3 lg:px-4">
         
        </div>
      </header>

      <main>
        
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Resumen de estadísticas */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                <div className="flex-shrink-0  rounded-md p-3">
                <UsersIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total de Equipos</dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.totalTeams}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                <div className="flex-shrink-0  rounded-md p-3">
                <UsersIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total de Miembros</dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.totalMembers}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                <div className="flex-shrink-0  rounded-md p-3">
                <UsersIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Provincias Activas</dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.activeProvinces}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                <div className="flex-shrink-0  rounded-md p-3">
                <UsersIcon className="h-6 w-6 text-gray-500" /> 
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Votantes Registrados</dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.registeredVoters}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acciones rápidas */}
          <div className="mt-5  max-w-5xl  place-content-center py-8 px-8 items-center justify-center text-sm  ">
          <h3 className="text-sm font-semibold text-gray-600">Registrar Elector</h3>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/teams/create" className="block p-6 bg-gray-150  ">
                <h3 className="text-sm mb-3   font-semibold text-gray-600">Crear Nuevo Equipo</h3>
                

      <div className="flex -space-x-2 overflow-hidden before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
      </div>
        </Link>
              <Link href="/electores/register" className="block p-2  ">
                <h3 className="text-sm font-semibold text-gray-600">Registrar Elector</h3>
                <p className="mt-2 text-sm text-gray-500">Añade un nuevo elector a la base de datos.</p>
              </Link>
              <Link href="/reports" className="block p-2 ">
                <h3 className="text-sm font-semibold text-gray-600">Generar Reporte</h3>
                <p className="mt-2 text-sm text-gray-500">Crea informes detallados de tu campaña.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}