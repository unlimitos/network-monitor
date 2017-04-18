/**
 * Created by tranquochuy on 4/18/17.
 */
import React from 'react';

import FooterWrapper from 'admin-lte-react/FooterWrapper';

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="pull-right hidden-xs">
                <b>Version</b> 0.0.1
            </div>
            <strong>
                <span>Copyright &copy; 2017 </span>
                <a href="#">Tran Quoc Huy</a>.
            </strong> MIT Version.
        </FooterWrapper>
    );
}
