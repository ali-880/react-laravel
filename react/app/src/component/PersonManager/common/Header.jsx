import React from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
    const persons = useSelector(state => state.persons);
    return (
        <div className="rtl text-center">
            <div className="alert alert-warning">
                لیست کارها
            </div>
            <div className="alert alert-info">
                تعداد کارهای ثبت شده<p className={persons.length > 3 ? ("badge btn-danger mx-2") : ("badge btn-primary")}>{persons.length}</p>
            </div>
        </div>
    );
}

export default Header;