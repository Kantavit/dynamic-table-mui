'use client'

import React, { useState } from 'react'
import CreateTableForm from '@/components/Table/CreateTableForm';
import { MuiTableDynamic } from '@/components/Table/MuiTableDynamic';
import ChooseTemplate from '@/components/Table/ChooseTemplate';
import { useRouter } from 'next/navigation';

export default function DynamicPage(){
    const router = useRouter();
    const [colNo, setColNo] = useState<number>(0);
    const [template, setTemplate] = useState<string[][]>([])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center mx-auto px-24 space-y-4 mb-5">
      <h1 className="text-2xl">Dynamic MUI Table</h1>
      <div className="mt-8">
        <CreateTableForm setColNo={setColNo} />
      </div>
      {colNo > 0 && (
        <MuiTableDynamic colNo={colNo} setTemplate={setTemplate}/>
      )}
      <ChooseTemplate template={template}/>
      <button className='mt-5 py-2 px-4 rounded-full bg-green-400' type='button' onClick={() => router.push("/")}>Use 2 Array Table</button>
    </div>
  )
}
