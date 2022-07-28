type StylePadding = 'small' | 'medium' | 'large' | (string & {});

function getPadding(padding: StylePadding) : string
{
    if(padding == 'small') return '12px';
    if(padding == 'medium') return '16px';
    if(padding == 'large') return '24px';
    return padding;
}

let padding: StylePadding;
padding = 'small';
padding = 'large';
padding = '8px';