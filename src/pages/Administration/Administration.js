import React from 'react';
import { Button} from 'semantic-ui-react'

const Administration = () => (
    <div>
        <Button.Group widths='7'>
            <Button>المعلومات الشّخصيّة</Button>
            <Button>التصرف في المدرسين</Button>
            <Button>التصرف في الأقسام</Button>
            <Button>التّصرّف في المواد</Button>
            <Button>تعيين المدرّسين</Button>
            <Button>التّصرّف في جدول الأوقات</Button>
            <Button> صندوق الأدوات</Button>
        </Button.Group> 
    </div>
)
export default Administration;