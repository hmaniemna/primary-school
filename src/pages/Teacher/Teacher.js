import React from 'react';
import { Button} from 'semantic-ui-react'

const Teacher = () => (
    <div>
        <Button.Group widths='5'>
            <Button><a href="/">المعلومات الشّخصيّة</a></Button>
            <Button><a href="/">التصرف في التلاميذ</a></Button>
            <Button><a href="/"> الحضور</a></Button>
            <Button><a href="/">جدول أوقاتي</a></Button>
            <Button><a href="/">إحصائيّات</a></Button>
        </Button.Group>
    </div>
)

export default Teacher;
