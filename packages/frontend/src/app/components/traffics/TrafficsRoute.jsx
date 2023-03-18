export default function TrafficsRoute() {
    return (
        <>
                <table>
            <thead>
                <th></th>
                <th>Route ID</th>
                <th>Start address</th>
                <th>End address</th>
                <th>Workload index</th>
                <th>Usage index</th>
                <th>Start date</th>
                <th>End date</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
            </tbody>
        </table>
        <div className="pagination-bar">
            <p className="count">1-10 of 195 items</p>
            <div className="pagination">
                <a href="/" className="pagination-arrow left">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41421 6L6.70711 10.2929C7.09763 10.6834 7.09763 11.3166 6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L0.292893 6.70711C-0.0976311 6.31658 -0.0976311 5.68342 0.292893 5.29289L5.29289 0.292893C5.68342 -0.0976311 6.31658 -0.0976311 6.70711 0.292893C7.09763 0.683418 7.09763 1.31658 6.70711 1.70711L2.41421 6Z" fill="#92929D"/>
                    </svg>
                </a>
                <a href="/" className="paginate active">1</a>
                <a href="/" className="paginate">2</a>
                <a href="/" className="paginate">3</a>
                <a href="/" className="paginate">4</a>
                <a href="/" className="paginate">5</a>
                <a href="/" className="paginate">...</a>
                <a href="/" className="paginate">19</a>
                <a href="/" className="pagination-arrow right">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6Z" fill="#92929D"/>
                    </svg>
                </a>
            </div>
        </div>
        </>
    );
}