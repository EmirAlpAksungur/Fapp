"use client";
import "../styles/table.css";

const TableComponent = ({ data }) => {
    return (
        <div className="table-card">
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {Array.from({ length: 20 }, (_, i) => (
                                <th key={i}>Col {i + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex} data-label={`Col ${colIndex + 1}`}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableComponent;