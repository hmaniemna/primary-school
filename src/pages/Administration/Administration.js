import React from 'react';
import { Button} from 'semantic-ui-react'

const Administration = () => (
    <div>
        <Button.Group widths='7'>
            <Button><a href="/admin/infos">المعلومات الشّخصيّة</a></Button>
            <Button><a href="/admin/teachermanagemnet">التصرف في المدرسين</a></Button>
            <Button><a href="/admin/classmanagement">التصرف في الأقسام</a></Button>
            <Button><a href="/admin/subjectmanagemnet">التّصرّف في المواد</a></Button>
            <Button><a href="/admin/teacherrecru">تعيين المدرّسين</a></Button>
            <Button><a href="/admin/timetablemanagemnet">التّصرّف في جدول الأوقات</a></Button>
            <Button><a href="/admin/tools"> صندوق الأدوات</a></Button>
        </Button.Group> 
    </div>
)
export default Administration;