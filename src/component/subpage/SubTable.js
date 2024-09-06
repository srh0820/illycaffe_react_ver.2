import React from 'react'

import subtablescss from './scss/subTable.module.scss';
import subtabledata from './json/SubTable.json'

function SubTable() {
    return (
        <section className={subtablescss.subtable}>
            <div className="container-1240">
                <p>상품 필수 정보</p>
                <div className={`${subtablescss.tablediv} d-flex`}>
                    {subtabledata.map((table, index) => (
                        <table key={index} className={subtablescss.table}>
                            <thead className='d-none'>
                                <tr>
                                    <th>항목</th>
                                    <th>값</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(table).map(([key, value], idx) => (
                                    <tr key={idx}>
                                        <th>{key}</th>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubTable
