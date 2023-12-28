import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBrand } from '../../redux/brand';
import { removeBrand } from '../../redux/brand';

/* const BrandFilter = () => {
    const dispatch = useDispatch();
    const allBrands = useSelector((state) => state.allBrandsArray.allBrandsArray)
    const selectedBrands = useSelector((state) => state.brand.brandArray)

    const handleChange = (e) => {
        if (e.target.checked) {
            dispatch(addBrand(e.target.value));
        } else {
            dispatch(removeBrand(e.target.value));
        }
    }

    return (
        <div className="flex flex-col gap-3 flex-1  min-w-[150px]">
            <h3 className="text-xl">Brand Name :</h3>
            <div className="flex flex-col gap-2">
                {allBrands.map((brand, key) => {
                    return (
                        <div key={brand.id} className="flex gap-3">
                            {selectedBrands.includes(brand.id) === true ? (
                                <input type="checkbox" id={brand.name + 'dept'} value={brand.id} checked={selectedBrands.includes(brand.id)} onChange={(e) => handleChange(e)} />
                            ) : (
                                <input type="checkbox" value={brand.id} onChange={(e) => handleChange(e)} />
                            )}
                            <label htmlFor={brand.name + "dept"}>{brand.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default BrandFilter
 */

const BrandFilter = () => {
    const dispatch = useDispatch();
    const allBrands = useSelector((state) => state.allBrandsArray.allBrandsArray);
    const selectedBrands = useSelector((state) => state.brand.brandArray);

    const handleChange = (e) => {
        const brandId = e.target.value;

        if (e.target.checked) {
            dispatch(addBrand(brandId));
        } else {
            dispatch(removeBrand(brandId));
        }
    };

    return (
        <div className="flex flex-col gap-3 flex-1  min-w-[150px]">
            <h3 className="text-xl">Brand Name :</h3>
            <div className="flex flex-col gap-2">
                {allBrands.map((brand) => (
                    <div key={brand.id} className="flex gap-3">
                        <input
                            type="checkbox"
                            id={brand.name + 'dept'}
                            value={brand.id}
                            checked={selectedBrands.includes(brand.id)}
                            onChange={handleChange}
                        />
                        <label htmlFor={brand.name + 'dept'}>{brand.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandFilter;