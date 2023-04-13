import React from 'react';
import 'pqgridf/pqgrid.min.css'
import Grid from '../../components/Grid'

const GridPage = () => {
    const colModel = [
        { title: 'RANKING', width: 20, align: 'center' },
        { title: 'COMPANY', width: 130 },
        { title: 'REVENUE', width: 80 },
        { title: 'PROFITS', width: 80 },
    ]
    
    const gridData = [
        [1, 'Exxon Mobil', '339938.0', '36130.0'],
        [2, 'Wal-Mart Stores', '315654.0', '11231.0'],
        [3, 'Royal Dutch Shell', '306731.0', '25311.0'],
        [4, 'BP', '267600.0', '22341.0'],
        [5, 'General Motors', '192604.0', '-10567.0'],
        [6, 'Chevron', '189481.0', '14099.0'],
        [7, 'DaimlerChrysler', '186106.3', '3536.3'],
        [8, 'Toyota Motor', '185805.0', '12119.6'],
        [9, 'Ford Motor', '177210.0', '2024.0'],
        [10, 'ConocoPhillips', '166683.0', '13529.0'],
        [11, 'General Electric', '157153.0', '16353.0'],
        [12, 'Total', '152360.7', '15250.0'],
        [13, 'ING Group', '138235.3', '8958.9'],
        [14, 'Citigroup', '131045.0', '24589.0'],
        [15, 'AXA', '129839.2', '5186.5'],
        [16, 'Allianz', '121406.0', '5442.4'],
        [17, 'Volkswagen', '118376.6', '1391.7'],
        [18, 'Fortis', '112351.4', '4896.3'],
        [19, 'Crédit Agricole', '110764.6', '7434.3'],
        [20, 'American Intl. Group', '108905.0', '10477.0'],
    ]
    
    const options = {
        numberCell: { resizable: true, title: '#' },
        scrollModel: { autoFit: true },
        sortModel: { on: true },
        showBottom: false,
        freezeRows: 0,
        resizable: true,
    }

    const newObj = {
        colModel,
        dataModel: {
            data: gridData,
        },
        ...options,
    }

    return (
        <div>
            <Grid props={newObj} />
        </div>
    )
};

export default GridPage;