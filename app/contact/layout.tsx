export default function ContantLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
            <div className={'text-center'}>this is footer contact</div>
        </div>
    )
}