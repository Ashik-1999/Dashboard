import React from "react";

const DomainQuota = () => {

  return (
    <div className='ml-2 mt-2 bg-white w-[450px] h-[250px]'  >
        <p className=' font-semibold mt-5 ml-5'>Domain Quota</p>
            <div className='flex items-center'>
                <div className=" w-24 h-24 rounded-full border-8 border-gray-300  border-r-[#0B3366] ml-2 ">
                    <p className='ml-4 mt-6 text-gray-600'>60.33% 
                        <span> <p className='ml-1'>Used</p></span>
                    </p>  
                </div>  
                <div className='flex flex-row items-center  '>
                    <div className="ml-5">
                        <p className='text-gray-600 mt-2'>Data Usage</p>
                        
                        <p className='mt-2 text-xl'>60.33gb/100gb</p>
                    </div>
                    <div className='ml-6 mr-4'>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <p className='text-gray-600'> Today
                                    <span className='mt-4'><p className='text-2xl text-black'>30.00%</p></span>
                                    </p> 
                                </td>
                                <td>
                                    <p className='mt-2 ml-4 text-sm text-green-700'>increase
                                    <span><p className='text-lg text-black'>+15.00</p></span>
                                    </p>
                                </td>
                            </tr>

                            <tr className='mt-4'>
                                <td>
                                    <p className='text-gray-600'> This week
                                    <span className='-mt-4'><p className='text-2xl text-black'>15.00%</p></span>
                                    </p> 
                                </td>
                                <td>
                                    <p className='mt-2 ml-4 text-sm text-red-700'>Decrease
                                    <span><p className='text-lg text-black'>-15.00</p></span>
                                    </p>
                                </td>
                            </tr>
                            <tr className='mt-4'>
                                <td>
                                    <p className='text-gray-600'> This Month
                                    <span className='-mt-4'><p className='text-2xl text-black'>55.00%</p></span>
                                    </p> 
                                </td>
                                <td>
                                    <p className='mt-2 ml-4 text-sm text-red-700'>Decrease
                                    <span><p className='text-lg text-black'>+25.00</p></span>
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default DomainQuota;
