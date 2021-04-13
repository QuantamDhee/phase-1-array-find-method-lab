function superbowlWin(record){
    const data = record.find((season) => season.result == 'W')
    return data ? data.year : undefined;
}
