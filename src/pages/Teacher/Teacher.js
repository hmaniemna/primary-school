import React from 'react';
import { Button} from 'semantic-ui-react'

const Teacher = () => (
    <div>
        <Button.Group widths='5'>
            <Button>المعلومات الشّخصيّة</Button>
            <Button>التصرف في التلاميذ</Button>
            <Button> الحضور</Button>
            <Button>جدول أوقاتي</Button>
            <Button>إحصائيّات</Button>
        </Button.Group>
    </div>
)

export default Teacher;
